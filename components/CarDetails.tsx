"use client"
import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarDetailsProps } from '@/types'
import React from 'react'


function CarDetails({isOpen, closeModal, car}:CarDetailsProps) {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child>
          <div className="fixed inset-0 bg-black bg-opacity-25">

          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails