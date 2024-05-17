import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ReactNode } from 'react'


interface IProps {
    isOpen:boolean,
    setIsOpen:(val:boolean) => void,
    closeModal:() => void,
    title:string,
    children:ReactNode    
}
const Modal =({title,isOpen,setIsOpen,closeModal,children}:IProps) => {

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      {/* Use the `Transition` component at the root level */}
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-md">
                  <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </DialogTitle>
                
                  <div className="mt-4">
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal