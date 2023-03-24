import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";

export default function SearchBar() {
  const [checkInValue, setcheckInValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );
  const [checkOutValue, setcheckOutValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  const [people, setPeople] = React.useState("");

  const handlePeopleChange = (event: SelectChangeEvent) => {
    setPeople(event.target.value as string);
  };

  const [room, setRoom] = React.useState("");

  const handleRoomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value as string);
  };
  return (
    <>
      <form>
        <SInputContainer>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <SInputDateContainer>
                <DatePicker
                  label="Check-In"
                  value={checkInValue}
                  onChange={(newValue) => setcheckInValue(newValue)}
                />
                <DatePicker
                  label="Check-Out"
                  value={checkOutValue}
                  onChange={(newValue) => setcheckOutValue(newValue)}
                />
              </SInputDateContainer>
            </DemoContainer>
          </LocalizationProvider>

          <SInputPriceContainer>
            <TextField id="min-price-search" label="Min Price" type="search" />
            <TextField id="max-price-search" label="Max Price" type="search" />
          </SInputPriceContainer>
          <SInputPeopleAndRoomContainer>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="people">People</InputLabel>
                <Select
                  labelId="label-people"
                  id="people"
                  value={people}
                  label="people"
                  onChange={handlePeopleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="room">Room</InputLabel>
                <Select
                  labelId="label-room"
                  id="roomt"
                  value={room}
                  label="room"
                  onChange={handleRoomChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </SInputPeopleAndRoomContainer>
        </SInputContainer>
      </form>
    </>
  );
}

const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SInputDateContainer = styled.div`
  display: flex;
  background-color: #fff;
`;

const SInputPriceContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin: "5px";
`;

const SInputPeopleAndRoomContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin: "5px";
`;
