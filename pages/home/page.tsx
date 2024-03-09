import React, { useEffect } from "react";

// Home page for Jaidee Framework

const FeatureCard = (props: { icon: string, title: string, description: string }) => {
  return <div className="flex flex-col justify-center items-center border p-4 gap-2 w-full">
    <h3 className="text-2xl font-bold">{props.icon}</h3>
    <p>{props.title}</p>
    <p>{props.description}</p>
  </div>
}

const features = [
  {
    icon: "📦",
    title: "Zero Configuration",
    description: "Jaidee is designed to be zero configuration, so you can start building your app without any setup."
  },
  {
    icon: "🔌",
    title: "Plugin System",
    description: "Jaidee has a plugin system, so you can extend your app with plugins."
  },
  {
    icon: "🚀",
    title: "Server Side Rendering",
    description: "Jaidee supports server side rendering, so your app can be SEO friendly."
  }
]

export default function Page(props: any) {
  return <div className="w-screen h-screen flex flex-col items-center gap-4 pt-12">
  {/* Hero */}
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-6xl font-bold">Jaidee</h1>
    <p className="text-lg">A modern web application framework</p>
  </div>
  {/* Features */}
  <div className="flex flex-col justify-center items-center gap-2">
    <h2 className="text-4xl font-bold">Features</h2>
    {
      features.map((feature, index) => {
        return <FeatureCard key={index} {...feature} />
      })
    }
    </div>
  </div>
}