import { redirect } from 'next/navigation';

export default function Home() {
  // Automatically redirects localhost:3000 -> localhost:3000/projects/gone-girls/introduction
  redirect('/projects/introduction');
}