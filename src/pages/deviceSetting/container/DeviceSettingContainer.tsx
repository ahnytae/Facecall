import { useEffect } from 'react';
import { useEnumerateDevices, useGetStreamDevices } from '@pages/deviceSetting/service/useDevices';
import { View1 } from './view';

export default function DeviceSettingContainer() {
  const devices = useGetStreamDevices();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('**', devices);
  }, [devices?.isError]);

  return <View1 />;
}
