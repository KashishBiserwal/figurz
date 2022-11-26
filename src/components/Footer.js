import React from 'react'
import Form from './Form'
import QuickLinks from './QuickLinks'

export default function Footer() {
  return (
    <div id='footer'>
        <div>
          <div className='logo'>FIGURZ</div>
          <p>!&copy; 2022 Kashish</p>
        </div>
        <QuickLinks />
        <Form />
    </div>
  )
}
