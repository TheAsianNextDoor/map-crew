'use client';

import dynamic from 'next/dynamic'
import { useMemo } from 'react';

const dynamicMap = () => dynamic(
  () => import('./map'),
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
)

export default function MapPage() {
  const Map = useMemo(dynamicMap, [])

  return <Map />
}
