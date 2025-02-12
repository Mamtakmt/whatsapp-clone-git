import React from 'react'

const Watsappclone = () => {
  return (
    <>

      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ display: 'flex', gap: '30%', flexDirection: 'column', height: '100%', width: '5%', background: '#3d3d3d', color: '#c2c4c4' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '60%', justifyContent: 'space-around', padding: '20%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-around', padding: '20%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
        </div>
        <div style={{ height: '100vh', width: '45%', background: '#1e2021', padding: '1%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '75%', color: 'white' }}>
            <h5 style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', color: 'white' }}>Chats</h5>
            <div style={{ display: 'flex', gap: '20px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
            </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4%', padding: '2%', borderRadius: '5px', background: '#3d3d3d ', marginTop: '2%', color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25-" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg><input type="text" name="" id="" placeholder='Search' style={{ width: '100%', border: 'none', background: 'none' }} />
          </div>
          <div style={{ display: 'flex', gap: '2%', marginTop: '2%', color: 'white' }}>
            <div style={{ padding: '2%', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3d3d3d' }}>All</div>
            <div style={{ padding: '2%', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3d3d3d' }}>Unread</div>
            <div style={{ padding: '2%', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3d3d3d' }}>Favourites</div>
            <div style={{ padding: '2%', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3d3d3d' }}>Group</div>
          </div>
          <div style={{ color: 'white', height: '15%', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0px 0.9px 0px 0px #3f3f40' }}>
            <img src="/public/bb.jpg" alt="" style={{ height: '40px ', width: '40px', borderRadius: '100%' }} />
            <div > <h6>Big Bro </h6>
              <div style={{ display: 'flex', gap: '300px', flexDirection: 'row' }} ><p style={{ margin: '0px', padding: '0px', fontSize: '80%' }}>2 nhi bhaiya 3</p><p style={{ fontSize: '70%' }}>8:45 pm</p></div>
            </div>
          </div>
          <div style={{ color: 'white', height: '15%', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0px 0.9px 0px 0px #3f3f40' }}>
            <img src="/public/hmt.jpg" alt="" style={{ height: '40px ', width: '40px', borderRadius: '100%' }} />
            <div > <h6>Hemant Bhai </h6><div style={{ display: 'flex', gap: '330px', flexDirection: 'row' }} ><p style={{ margin: '0px', padding: '0px', fontSize: '80%' }}>okay..</p><p style={{ fontSize: '70%' }}>21/12/2024</p></div></div>
          </div>
          <div style={{ color: 'white', height: '15%', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0px 0.9px 0px 0px #3f3f40' }}>
            <img src="/public/manju.jpg" alt="" style={{ height: '40px ', width: '40px', borderRadius: '100%' }} />
            <div > <h6>Manju Bhabhiji </h6>
              <div style={{ display: 'flex', gap: '300px', flexDirection: 'row' }} ><p style={{ margin: '0px', padding: '0px', fontSize: '80%' }}>Kna aao vaps..</p><p style={{ fontSize: '70%' }}>2:30 am</p></div>
            </div>
          </div>
          <div style={{ color: 'white', height: '15%', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0px 0.8px 0px 0px #3f3f40' }}>
            <img src="/public/sss.png" alt="" style={{ height: '40px ', width: '40px', borderRadius: '100%' }} />
            <div > <h6>Ssss</h6>
              <div style={{ display: 'flex', gap: '260px', flexDirection: 'row' }} ><p style={{ margin: '0px', padding: '0px', fontSize: '80%' }}>srdi ktik pd bhabhiji...</p><p style={{ fontSize: '70%' }}>Yesterday</p></div>
            </div>
          </div>
          <div style={{ color: 'white', height: '15%', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0px 0.8px 0px 0px #3f3f40' }}>
            <img src="/public/paa.png" alt="" style={{ height: '40px ', width: '40px', borderRadius: '100%' }} />
            <div > <h6>Paaa</h6>

              <div style={{ display: 'flex', gap: '270px', flexDirection: 'row' }} ><p style={{ margin: '0px', padding: '0px', fontSize: '80%' }}>papa 1000rs bhej jo</p><p style={{ fontSize: '70%' }}>8:00 pm</p></div>

            </div>

          </div>
        </div>

        <div style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '2px', height: '10%', background: '#3d3d3d', display: 'flex', justifyContent: 'space-between', color: 'white', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '20px' }}>
              <img src="/public/mamta.jpg" alt="" style={{ height: '40px ', width: '40px', borderRadius: '100%' }} />
              <h6>Myself </h6></div>
            <div style={{ display: 'flex', gap: '30px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>

          </div>
          <div className='wpwall' style={{ height: '500px', padding: '2%' ,overflowY:'scroll'}}>
            <div style={{}}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>Hey! 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '70%' }}>Hello! 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>How are you! 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '70%' }}>I am Fine and you! 7:30</div>
            </div>

            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>I am also Fine! 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>Whats going on? 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '70%' }}>Nothing Special.. 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>Are you interested in react? 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '70%' }}>what about your study.. 7:30 </div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>Running dude! 7:30 am</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '70%' }}>Hmm.. 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>Where are you right now? 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>in jaipur😎. 7:30 </div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '70%' }}>ohkay😒! 7:30 </div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%' }}>No I am not interested..  7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '80%' }}>Bye😁 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '80%' }}>Bye🤣 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '80%' }}>good night 😊 7:30</div>
            </div>
            <div style={{ paddingTop: '6px' }}>
              <div style={{ color: 'white', height: '5%', padding: '0.5%', width: '100%', display: 'inline', background: '#3d3d3d', borderRadius: '5px', fontSize: '80%', marginLeft: '80%' }}>Bye bye👍 7:30</div>
            </div>
          </div>
          <div style={{ height: '10%', background: '#2c2c2c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>


            <input type="text" name="" id="" placeholder='Type a message' style={{ width: '90%', borderRadius: '5px', border: 'none', padding: '5px', background: '#3d3d3d' }} />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>

          </div>
        </div>
      </div>


    </>
  )
}

export default Watsappclone