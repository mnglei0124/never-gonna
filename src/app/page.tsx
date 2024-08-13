'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const audioElement: any = document.getElementById('rick-audio');

    const playAudio = () => {
      audioElement.play();
    };
    audioElement.play();
    document.addEventListener('click', playAudio, { once: true });

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        src='https://media1.tenor.com/m/RK_8zCji9ZcAAAAC/never-gonna-give-you-up.gif'
        width={400}
        height={400}
        alt='al'
      />
      <div className=''>
        <audio id='rick-audio' src='/audio/rick.mp3' controls autoPlay></audio>
      </div>
    </main>
  );
}
