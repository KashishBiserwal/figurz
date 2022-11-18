import React from 'react'
import { useMenFilterContext } from '../Men/menFilterContext'

export default function MenSort() {

    const {sorting} = useMenFilterContext();

  return (
    <div className="sort-section">
        <form action="#">
          <p  htmlFor="sort" className='filter-heading'>Sort By</p>
          <select
            name="sort"
            id="sort"
            className="sort-selection-style"
            onClick={sorting}>
            <option value="lowest">Price (low-high)</option>
            <option value="#" disabled></option>
            <option value="highest">Price (high-low)</option>
            <option value="#" disabled></option>
            <option value="a-z">Name (a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Name (z-a)</option>
          </select>
        </form>
    </div>
  )
}
