import React from 'react'
import { Link } from 'react-router-dom';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import brand from '@/love/dFunction/gBrand';
import { Separator } from '@/components/ui/separator';


const HeroSectionComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      <img src={Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.image?.url} alt='Back' width={"50%"} /> <br/>
      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.tag} <br/>

      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.title} <br/>

      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle} <br/>

      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description} <br/>

      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.webLinks?.map((each, index) => {
        return (
          <Link key={index} to={each?.url} >{each?.title}</Link>
        )
      }) }

      {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve ? (
        <Link to={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute} >View Profile</Link>
      ) : (
        <Link to={FinalRouteName.AuthRoute.RegisterRoute} >Create Account</Link>
      )}

      {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.socialLinks?.map((each, index) => {
        return (
          <Link key={index} to={each?.url} >{each?.title}</Link>
        )
      })}

      <Separator />
    </React.Fragment>
  )
}

export default HeroSectionComponent