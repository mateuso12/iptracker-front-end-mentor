/* eslint-disable prettier/prettier */
import * as S from './styles'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const Map = dynamic(() => import('components/Map'), { ssr: false })

type ResultProps = {
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    timezone: string;
    geonameId: number;
    lat: string;
    lng: string;
  }
}


export default function Header( ) {
  const initialState = {
    ip: '',
    isp: '',
    location: {
      city: '',
      country: '',
      timezone: '',
      geonameId: 0,
      lat: '',
      lng: ''
    }
  };


  const [ipAddress, setIpAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<ResultProps>(initialState);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    async function getUserIp() {
     try {
      setLoading(true)

       const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
       const data = await response.json();

       if (response.status === 200) 

       setResults(data)
     } catch(err) {
       console.log(err)
     } finally {
       setLoading(false)
     }
    }
    getUserIp()
  }, [])

  async function handleSubmit() {
    if(!ipAddress) return;

    try { 
      setLoading(true)

      if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {

        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`);
        const data = await response.json();
        
        if(response.status === 200)
        setResults(data);

      } else {

        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${ipAddress}`);
        const data = await response.json();

        if(response.status !== 200) throw new Error();

        setResults(data);

      }

    } catch (err) {
        toast.error('An error occurred while searching for this IP or domain! Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const defaultPosition = [-23.550520, -46.633308]

  return (
    <S.Container>
      <S.HeaderContainer>
        <h1>IP Address Tracker</h1>
        <form>
          <input type="text" placeholder="Search for any IP address or domain"value={ipAddress}
            onChange={({target}) => setIpAddress(target.value)}/>
          <button disabled={!!loading} type="submit" onClick={handleSubmit}>
            <img src="img/icon-arrow.svg"></img>
          </button>
        </form>
        <S.SearchResults>
          <ul>
            <li>
              <div>
                <strong>IP ADDRESS</strong>
                <p>{results.ip}</p>
              </div>
            </li>
            <li>
              <div>
                <strong>LOCATION</strong>
                <p>
                  {`${results.location.city},${results.location.country}`}
                  <br />
                  {results.location.geonameId}
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>TIMEZONE</strong>
                <p>UTC {results.location.timezone}</p>
              </div>
            </li>
            <li>
              <div>
                <strong>ISP</strong>
                <p>{results.isp}</p>
              </div>
            </li>
          </ul>
        </S.SearchResults>
      </S.HeaderContainer>
      <S.MapContainer>
      <Map 
      defaultPosition={defaultPosition} 
      location={results.location ? [results.location.lat, results.location.lng] : defaultPosition}/>
      </S.MapContainer>
      
    </S.Container>
  )
}
