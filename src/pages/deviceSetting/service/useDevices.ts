import { useEffect, useState } from 'react';

type ErrorStatus = {
  isError: boolean;
  isErrorMsg?: string;
};

type EnumerateDevice = ErrorStatus & {
  devices?: MediaDeviceInfo[];
};

type Stream = ErrorStatus & {
  stream?: MediaStream;
};

const useEnumerateDevices = () => {
  const [devices, setDevices] = useState<EnumerateDevice>();

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      setDevices({
        isError: true,
        isErrorMsg: 'enumerateDevices()를 지원하지 않습니다.',
      });
      return;
    }

    loadEnumerateDevices();
  }, []);

  const loadEnumerateDevices = async () => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setDevices({
        isError: false,
        devices,
      });
    } catch (e: any) {
      setDevices({
        isError: true,
        isErrorMsg: e.message,
      });
    }
  };

  return devices;
};

const useGetStreamDevices = () => {
  const [mediaStream, setMediaStream] = useState<Stream>();

  useEffect(() => {
    getMedia();
  }, []);

  const getMedia = async () => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMediaStream({
        isError: false,
        stream,
      });
    } catch (e: any) {
      setMediaStream({
        isError: true,
        isErrorMsg: e.message,
      });
    }
  };

  return mediaStream;
};

export { useEnumerateDevices, useGetStreamDevices };
