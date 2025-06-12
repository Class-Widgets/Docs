import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.replace('https://classwidgets.rinlit.cn/');
  }, []);
  return null;
}
