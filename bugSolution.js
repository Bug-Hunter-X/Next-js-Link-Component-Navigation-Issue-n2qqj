```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/profile">
        <a>Go to Profile</a>
      </Link>
    </div>
  );
}

export default MyComponent;

// Ensure the presence of a file at pages/profile.js
// pages/profile.js
export default function Profile(){
  return (
    <h1>Profile Page</h1>
  )
}
```