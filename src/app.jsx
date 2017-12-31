import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import List from 'material-ui/List'
import Settings from './settings'
import BookmarksListItem from './bookmark'

export class BookmarksList extends React.Component {
  render () {
    return (
      <List>
      </List>
    )
  }
}

export class SettingsButton extends React.Component {
  render () {
    return (
      <FloatingActionButton secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
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

export class SiteContainer extends React.Component {
  render () {
    return (
      <div>
        <SettingsButton />
        <SearchBar />
        <BookmarksList />
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
