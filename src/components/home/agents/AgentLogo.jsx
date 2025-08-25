import React from 'react'

export default function AgentLogo({logo}) {
  return (
      <div className="relative border-y border-black/10 px-16 py-6">
          <img src={logo} alt="logo" className="h-7 w-auto" />
          <span className="absolute -top-[8px] -right-[5px] font-tinos leading-none ">+</span>
          <span className="absolute -bottom-[8px] -right-[5px] font-tinos leading-none ">+</span>
      </div>
  );
}
