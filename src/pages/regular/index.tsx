import Layout from '../../components/layout'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    useDisclosure,
    HStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Select,
    Textarea,
    FormControl,
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import AddAttendeeModal from './_components/add-attendee-modal';

export default function Regular() {
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Regular</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <HStack mb='4'>
                <AddAttendeeModal />
            </HStack>
            
            <AttendeesListTable />
        </Layout>
    )
}