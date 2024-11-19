import ProfileChangePassword from "@/Components/Profile/ProfileChangePassword";
import ProfileChangePicture from "@/Components/Profile/ProfileChangePicture";
import ProfileEditName from "@/Components/Profile/ProfileEditName";
import ProfileLoginDetails from "@/Components/Profile/ProfileLoginDetails";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Profile() {
    const details = usePage().props.auth.user;

    return (
        <DashboardLayout page="Profile">
            <ProfileLoginDetails name={details.name} email={details.email} />
            <ProfileChangePicture profilepicture={details.profilepicture} />
            <ProfileEditName
                firstname={details.firstname}
                lastname={details.lastname}
            />
            <ProfileChangePassword />
        </DashboardLayout>
    );
}
