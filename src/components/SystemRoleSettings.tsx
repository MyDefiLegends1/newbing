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
  // Initialize the system role when the component is first rendered
  props.setCurrentSystemRoleSettings("You are a helpful assistant your name is Bing, answer as concisely as possible in English by default....");

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
        <Show when={!props.currentSystemRoleSettings()}>
          <span onClick={() => props.setSystemRoleEditing(!props.systemRoleEditing())} class="sys-edit-btn">
            <IconEnv />
            <span>Add System Role</span>
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
              placeholder="You are a helpful assistant your name is Bing, answer as concisely as possible in English by default...."
              autocomplete="on"
              autofocus
              rows="3"
              gen-textarea
              disabled={!props.canEdit()}
            />
          </div>
        </div>
      </Show>
    </div>
  )
}
