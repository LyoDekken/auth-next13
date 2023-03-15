import 'tailwindcss/tailwind.css';
import { ReactNode } from 'react';
import Provider from './provider';

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
