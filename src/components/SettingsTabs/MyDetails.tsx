import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";

import * as Input from "@/components/Form/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/TextArea";

export function MyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold capitalize text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 font-semibold capitalize text-white shadow-sm hover:bg-violet-700"
            form="settings"
          >
            save
          </button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="João" />
            </Input.Root>
            <Input.Root>
              <Input.Control defaultValue="Pedro" />
            </Input.Root>
          </div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="tec.joao.freitas@gmail.com"
            />
          </Input.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" defaultValue="Front-end Developer" />
          </Input.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="ar" text="Argentina" />
            <SelectItem value="us" text="United States" />
          </Select>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            TimeZone
          </label>
          <Select placeholder="Select a time zone...">
            <SelectItem value="br" text="America/São Paulo UTC (-03:00)" />
            <SelectItem value="pacific" text="Pacific Ocean UTC (+08:00)" />
          </Select>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="grid gap-3 grid-cols-2">
              <Select defaultValue="normal" placeholder="">
                <SelectItem value="normal" text="Normal Text" />
                <SelectItem value="md" text="Markdown" />
              </Select>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <ListOrdered
                    strokeWidth={3}
                    className="h-4 w-4 text-zinc-500"
                  />
                </button>
              </div>
            </div>
            <Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-700"
          >
            Portifolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>
        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold capitalize text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 font-semibold capitalize text-white shadow-sm hover:bg-violet-700"
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
}
