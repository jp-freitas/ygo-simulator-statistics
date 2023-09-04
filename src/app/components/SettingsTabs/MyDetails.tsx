import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { Mail } from 'lucide-react'

export function MyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="capitalize rounded-lg px-4 py-2 font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">cancel</button>
          <button type="submit" className="capitalize rounded-lg px-4 py-2 font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" form="settings">save</button>
        </div>
      </div>
      <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
        <div className="grid grid-cols-form gap-3">
          <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
            Name
          </label>
          <div className="grid gap-6 grid-cols-2">
            <InputRoot>
              <InputControl id='firstName' defaultValue="João" />
            </InputRoot>
            <InputRoot>
              <InputControl defaultValue="Pedro" />
            </InputRoot>
          </div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <InputRoot>
            <InputPrefix>
              <Mail className='h-5 w-5 text-zinc-500' />
            </InputPrefix>
            <InputControl id='email' type='email' defaultValue="tec.joao.freitas@gmail.com" />
          </InputRoot>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="yourPhoto" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
              This will be displayed on your profile.
            </span>
          </label>
          <div></div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <InputRoot>
            <InputControl id='role' defaultValue="Front-end Developer" />
          </InputRoot>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="country" className="text-sm font-medium text-zinc-700">
            Country
          </label>
          <div></div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
            TimeZone
          </label>
          <div></div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
              Write a short introduction.
            </span>
          </label>
          <div></div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="portfolio" className="text-sm font-medium text-zinc-700">
            Portifolio projects
            <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
              Share a few snippets of your work.
            </span>
          </label>
          <div></div>
        </div>
        <div className='flex items-center justify-end gap-2 pt-5'>
          <button type="button" className="capitalize rounded-lg px-4 py-2 font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">cancel</button>
          <button type="submit" className="capitalize rounded-lg px-4 py-2 font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700">save</button>
        </div>
      </form>
    </div>
  )
}