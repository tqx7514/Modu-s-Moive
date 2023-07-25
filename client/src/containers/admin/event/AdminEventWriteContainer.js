import React, { useState } from "react";
import AdminEventWriteComponent from "../../../components/admin/event/AdminEventWriteComponent";
import styled from "styled-components";


const AdminEventWriteBlockContainer = styled.div`
`;

const AdminEventWriteContainer = () => {
    const [eventData, setEventData] = useState({
        categoryId: "",
        eventTitle: "",
        eventContent: "",
        eventImg: "",
        startEventDate: "",
        endEventDate: "",
    });

    const handleChange = (name, value) => {
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    return (
        <AdminEventWriteBlockContainer>
            <AdminEventWriteComponent
            categoryId={eventData.categoryId}
            eventTitle={eventData.eventTitle}
            eventContent={eventData.eventContent}
            eventImg={eventData.eventImg}
            startEventDate={eventData.startEventDate}
            endEventDate={eventData.endEventDate}
            onChange={handleChange}
            />
        </AdminEventWriteBlockContainer>
    );
};

export default AdminEventWriteContainer;
