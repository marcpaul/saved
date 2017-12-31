import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

export class SavedUserKeyField extends React.Component {
  render () {
    return (
      
    )
  }
}

export class SearchBar extends React.Component {
  render () {
    return (
      <TextField
        className="search"
        floatingLabelText="search bookmarks"
        fullWidth={true}
        type='text'
      />
    )
  }
}

export default class Container extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <SearchBar />
      </MuiThemeProvider>
    )
  }
}
