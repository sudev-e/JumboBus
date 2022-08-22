import React from 'react'
import HomePageSection from './HomePageSection';
import HomeSections from './HomeSections';
import HomeSectionThree from './HomeSectionThree';
import HomeSectionTwo from './HomeSectionTwo';
import UserNavBar from './UserNavbar';
function HomeScreen() {
  return (
    <div>
        <UserNavBar/>
        <HomePageSection/>
        <HomeSections/>
        <HomeSectionTwo/>
        <HomeSectionThree/>
    </div>
  )
}

export default HomeScreen