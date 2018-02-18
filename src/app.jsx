import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'
import Badge from 'material-ui/Badge'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import Settings from './settings'

const style = {
  badge: {
    float: 'right',
    display: 'inline'
  },
  settings: {
    float: 'left',
    display: 'inline'
  }
}

const dataSourceTemplate = {
  value: 'bk_url',
  text: 'bk_title'
}



export class ReloadBookmarksButton extends React.Component {
  handleClick () {
    console.log(this)
  }

  render () {
    const bookmarksCount = this.props.bookmarksCount
    return (
      <div>
        <Badge
          badgeContent={bookmarksCount}
          primary={true}
          style={style.badge}
        >
          <RaisedButton
            label="Reload Bookmarks"
            primary={true}
            onClick={this.handleClick}
          />
        </Badge>
      </div>
    )
  }
}

export class SettingsButton extends React.Component {
  render () {
    return (
      <FloatingActionButton secondary={true} style={style.settings} >
        <ActionSettings />
      </FloatingActionButton>
    )
  }
}

export class SearchBar extends React.Component {
  render () {
    return (
      <div>
        <AutoComplete
          floatingLabelText="search bookmarks on saved.io"
          filter={AutoComplete.fuzzyFilter}
          dataSource={fruit}
          dataSourceConfig={dataSourceTemplate}
          maxSearchResults={2}
          fullWidth={true}
          openOnFocus={true}
        />
      </div>
    )
  }
}

export class SiteContainer extends React.Component {
  render () {
    return (
      <div>
        <SettingsButton />
        <ReloadBookmarksButton />
        <SearchBar />
        {/* <Settings /> */}
      </div>
    )
  }
}

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    const init = {
      method: 'GET'
    }
    this.state = {bookmarks: {}}
  }

  fetchData () {
    const request = new Request(`http://devapi.saved.io/bookmarks?devkey=${devkey}&key=${key}&page=1&limit=1000`)
    return fetch(request, this.props.init)
  }

  componentDidMount () {
    if (navigator.onLine) {
      this.fetchData()
        .then((response) => {
          if (response.status === 200) return response.json()
          else throw new Error()
        })
        .then((data) => {
          this.setState({
            bookmarks: data
          })
          console.log(this.state.bookmarks)
        })
        .catch((error) => {
          // handleRequestError(error)
        })
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <SiteContainer />
      </MuiThemeProvider>
    )
  }
}
