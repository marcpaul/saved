import React from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const customContentStyle = {
  width: '80%',
  maxWidth: '80%'
}

const keyFieldsStyle = {
  display: 'block',
  width: '50%',
  maxWidth: '50%'
}

class SavedUserKeyField extends React.Component {
  render () {
    return (
      <TextField
        className='userKey'
        floatingLabelText='saved.io api user key'
        type='text'
        style={keyFieldsStyle}
      />
    )
  }
}

class SavedDevKeyField extends React.Component {
  render () {
    return (
      <TextField
        className='devKey'
        floatingLabelText='saved.io api dev key'
        type='text'
        style={keyFieldsStyle}
      />
    )
  }
}

class Settings extends React.Component {
  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
      />,
      <FlatButton
        label="Submit"
        primary={true}
      />
    ]
    return (
      <div>
        <Dialog
          title="Settings"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={true}
        >
          <SavedUserKeyField />
          <SavedDevKeyField />
      </Dialog>
      </div>
    )
  }
}

export default Settings
