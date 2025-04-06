"use client"
import React from 'react'
import { Trash } from 'lucide-react'
import { Button } from './ui/button'
import { deleteInterviewByInterviewId } from '@/lib/actions/general.action'

const DeleteInterviewBtn = ({ interviewId }: { interviewId: string }) => {
    return (
        <Button className="cursor-pointer bg-transparent hover:bg-transparent" onClick={() => deleteInterviewByInterviewId(interviewId)}>
            <Trash size={24} color='red' />
        </Button>
    )
}

export default DeleteInterviewBtn