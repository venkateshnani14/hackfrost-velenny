'use client'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {v4 as uuidv4} from 'uuid'
import meetingStore from '@/app/stores/meeting.store';

export default function App() {
  const roomID = uuidv4();
  const {meetingName} = meetingStore()
  const name = meetingName.length < 3 ? 'Binod' : meetingName;
  let myMeeting:any = async (element:any) => {

 // generate Kit Token
//  const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID)
 const appID = 1791105037;
//  const serverSecret = process.env.NEXT_PUBLIC??'';
 const serverSecret = '79709ca23ca95f016f109283e913576b';
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,uuidv4(),name);
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Meeting link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };

  return (
 <div>
       <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    <div>Hello men</div>
 </div>
  );
}
