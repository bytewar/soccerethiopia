import React from 'react'
import { Link } from 'gatsby'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'

import SmallNews from './small-news'

const RecentNews = () => (
  <div style={{ border: "1px solid #ddd" }}>
    <h4 style={{ margin: "20px auto", maxWidth: 100 }}>Recent</h4>
    {[1,2,3,4,5,6].map(n => <div style={{ borderBottom: "1px solid #ddd", marginBottom: 10 }}><SmallNews data={n} /></div>)}
  </div>
)

export default RecentNews