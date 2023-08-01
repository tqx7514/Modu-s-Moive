import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { userGender } from "../../../lib/api/admin/adminchart";
import { userDataGender } from "../../../data/userData";
import PieChart from "../../../components/admin/chart/userGenderChart";

const AdminMainContainer = () => {
  // const [userGender, setUserGender] = useState(null);
  const [Mcount, setMcount] = useState(0);
  const [Wcount, setWcount] = useState(0);

  useEffect(() => {
    const data = async () => {
      try {
        const result = await userGender();
        console.log("result", result.data.Mcount, result.data.Wcount);
        setMcount(result.data.Mcount);
        setWcount(result.data.Wcount);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  const genderData = userDataGender({ a: Mcount, b: Wcount });
  return (
    <div>
      {/* <Box height="40vh">
        <PieChart data={genderData} />
      </Box> */}
    </div>
  );
};

export default AdminMainContainer;
