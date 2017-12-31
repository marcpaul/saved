import React from 'react'
import ListItem from 'material-ui/List'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

class BookmarksListItem extends React.Component {
  render () {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    )

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    )
    return (
      <ListItem
        rightIconButton={rightIconMenu}
        primaryText="primary"
      />
    )
  }
}

export default BookmarksListItem
