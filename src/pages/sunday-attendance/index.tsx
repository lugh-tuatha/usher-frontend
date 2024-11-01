import React from 'react'

import { useAttendance } from '../../hooks/use-attendance'

import Layout from '../../components/layout'
import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Heading,
 } from '@chakra-ui/react'
import SundayAttendanceTableList from './_components/sunday-attendance-table-list'

export default function SundayAttendance() {
    const { data, isLoading } = useAttendance()

    console.log(data)
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Sunday Attendance</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex justifyContent='space-between' alignItems='center' mb='2'>
                <Heading size="md" mb='2'>Attendees This Sunday (10/23/2024)</Heading>
                <Button colorScheme='blue'>
                    Print
                </Button>
            </Flex>

            <SundayAttendanceTableList />
        </Layout>
    )
}
