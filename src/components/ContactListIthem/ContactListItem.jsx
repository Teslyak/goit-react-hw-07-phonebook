import React from 'react'
import { Button, Item, ItemName } from './ContactListItem.styled'

export const ContactListItem = ({ item: { number, name }, onDeleteContact }) => {
 
  return (
      <>
        <Item>
        <ItemName>{name}: {number}</ItemName>
        <Button type="button" onClick={onDeleteContact}>Delete</Button>
      </Item>
      
      </>
  )
}

