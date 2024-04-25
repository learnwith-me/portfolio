import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import UserRegistrationForm from './UserRegistrationForm';

export default function RegisterModal({ openModal, regBtnText, closeLoginModal }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // useEffect(() => {
    //     closeLoginModal();
    // }, [closeLoginModal])


    return (
        <>
            <div className="" onClick={openModal}>
                {regBtnText}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                                    <a className=' absolute right-10 top-10 cursor-pointer' onClick={closeLoginModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)" /><path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)" /></svg>
                                    </a>
                                    <div className="mt-2">
                                        <UserRegistrationForm />

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
