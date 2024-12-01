import { create } from "zustand";

interface storeType {
    joiningLink:string,
    meetingName:string,
    setJoiningLink:(value:string) => void;
    setMeetingName:(value:string) => void;
}

const meetingStore = create<storeType>((set) => ({
    joiningLink:'',
    meetingName:'',
    setJoiningLink:(value) => set({joiningLink:value}),
    setMeetingName:(value) => set({meetingName:value})
}))

export default meetingStore;