/* @flow */
import React, { Component, Fragment } from "react";
import { createStructuredSelector } from "reselect";
import { Switch, Alert } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { translate, Trans } from "react-i18next";
import { setPrivacy } from "../../../actions/settings";
import { privacySelector } from "../../../reducers/settings";
import type { Privacy } from "../../../reducers/settings";
import auth from "../../../context/AuthPass/auth";
import SettingsRow from "../../../components/SettingsRow";

type Props = {
  privacy: Privacy,
  setPrivacy: ($Shape<Privacy>) => void,
};
type State = {
  validationPending: boolean,
};

const mapStateToProps = createStructuredSelector({
  privacy: privacySelector,
});

const mapDispatchToProps = {
  setPrivacy,
};

class BiometricsRow extends Component<Props, State> {
  state = {
    validationPending: false,
  };

  onValueChange = async (biometricsEnabled: boolean) => {
    if (biometricsEnabled) {
      this.setState({ validationPending: true });
      let success = false;
      let error;
      try {
        success = await auth("Please authenticate to Ledger Live app");
      } catch (e) {
        error = e;
      }
      this.setState({ validationPending: false });
      if (!success) {
        Alert.alert(
          "Authentication failed",
          `Auth Security was not enabled because your phone failed to authenticate.\n${String(
            error || "",
          )}`,
        );
        return;
      }
    }
    this.props.setPrivacy({
      biometricsEnabled,
    });
  };

  render() {
    const { privacy } = this.props;
    const { validationPending } = this.state;
    return (
      <Fragment>
        {privacy.biometricsType && (
          <SettingsRow
            title={
              <Trans
                i18nKey="auth.enableBiometrics.title"
                values={{
                  ...privacy,
                  biometricsType: privacy.biometricsType,
                }}
              />
            }
            desc={
              <Trans
                i18nKey="auth.enableBiometrics.desc"
                values={{
                  ...privacy,
                  biometricsType: privacy.biometricsType,
                }}
              />
            }
          >
            <Switch
              value={privacy.biometricsEnabled || validationPending}
              onValueChange={this.onValueChange}
            />
          </SettingsRow>
        )}
      </Fragment>
    );
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate(),
)(BiometricsRow);
