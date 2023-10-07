import { Show } from 'solid-js'
import IconEnv from './icons/Env'
import IconX from './icons/X'
import type { Accessor, Setter } from 'solid-js'

interface Props {
  canEdit: Accessor<boolean>
  systemRoleEditing: Accessor<boolean>
  setSystemRoleEditing: Setter<boolean>
  currentSystemRoleSettings: Accessor<string>
  setCurrentSystemRoleSettings: Setter<string>
}

export default (props: Props) => {
  return (
    <div class="my-4">
      <Show when={!props.systemRoleEditing() && props.canEdit()}>
        <Show when={props.currentSystemRoleSettings()}>
          <div>
            <div class="fi gap-1 op-50 dark:op-60">
              <span onClick={() => props.setCurrentSystemRoleSettings('')} class="sys-edit-btn p-1 rd-50%" > <IconX /> </span>
              <span>System Role: {props.currentSystemRoleSettings()}</span>
            </div>
          </div>
        </Show>
        <Show when={!props.currentSystemRoleSettings() && props.canEdit()}>
          <span onClick={() => props.setSystemRoleEditing(!props.systemRoleEditing())} class="sys-edit-btn">
            <IconEnv />
            <span>Edit System Role</span>
          </span>
        </Show>
      </Show>
      <Show when={props.systemRoleEditing() && props.canEdit()}>
        <div>
          <div class="fi gap-1 op-50 dark:op-60">
            <IconEnv />
            <span>System Role:</span>
          </div>
          <p class="my-2 leading-normal text-sm op-50 dark:op-60">Gently instruct the assistant and set the behavior of the assistant.</p>
          <div>
            <textarea
              value={props.currentSystemRoleSettings()}
              onInput={(e) => props.setCurrentSystemRoleSettings(e.currentTarget.value)}
              placeholder="You are a helpful assistant your name is Bing, answer as concisely as possible in English by default...."
              autocomplete="on"
              autofocus
              rows="3"
              gen-textarea
              disabled={!props.canEdit()}
            />
          </div>
          <button onClick={() => props.setSystemRoleEditing(false)} gen-slate-btn disabled={!props.canEdit()}>
            Save
          </button>
        </div>
      </Show>
    </div>
  )
}
