import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DeviceSettingContainer } from '@pages/deviceSetting/container';
import { MainRoomContainer } from '@pages/mainService/container';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeviceSettingContainer />} />
        <Route path="/room" element={<MainRoomContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
