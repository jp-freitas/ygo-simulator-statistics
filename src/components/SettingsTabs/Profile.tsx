import * as Input from '@/components/Form/Input'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <h2 className="text-lg font-medium text-zinc-900">Profile</h2>
        <span className="text-sm text-zinc-500">
          Update your profile information here.
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            cancel
          </Button>
          <Button type="submit" form="profile">
            save
          </Button>
        </div>
      </div>
      <div>
        <form
          id="profile"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6">
              <Input.Root>
                <Input.Control
                  id="fullname"
                  defaultValue="João Pedro de Deus Freitas"
                />
              </Input.Root>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
