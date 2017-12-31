import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Settings from './settings'

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

export class SiteContainer extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        {/* <Settings /> */}
      </div>
    )
  }
}

export default class Container extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <SiteContainer />
      </MuiThemeProvider>
    )
  }
}
