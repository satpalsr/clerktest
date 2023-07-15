'use client'
export const runtime = 'edge'
import { SignOutButton } from "@clerk/nextjs";
import { useState } from 'react';

export default function HomePage() {
const [signOutText, setSignOutText] = useState('Sign Out');

const handleSignOut = async () => {
      setSignOutText('Signing Out');
};

return  (
<div>
<SignOutButton signOutCallback={handleSignOut}>
                        {signOutText}
</SignOutButton>
</div>
)

}