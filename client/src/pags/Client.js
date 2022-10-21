
import React from 'react'
import { Container } from 'react-bootstrap'
import Client_1 from './Client_1'
import Client_2 from './Client_2'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import PauseIcon from '@mui/icons-material/Pause';
import Table from 'react-bootstrap/Table';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      


  }]
const Client = () => {
  return (
    
     
        <Container maxWidth="sm" >
            <h2>회의 이름</h2>
          <Grid container>

          <Box sx={{ flexGrow: 1 , 
                    }}>
            <Grid container spacing={2} columns={16}>
              {/* 오른쪽 페이지 */}
              <Grid item xs={10}>
                <Item>
                <Stack spacing={1}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={600} height={60} />
                  
                  </Stack>

                  <Stack spacing={1}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={600} height={60} />
                  
                  </Stack>
                  <Stack spacing={1}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={600} height={60} />
                  
                  </Stack>
                  <Stack spacing={1}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={600} height={60} />
                  
                  </Stack>
                  <Stack spacing={1}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={600} height={60} />
                  
                  </Stack>

                </Item>
              </Grid>


              {/* 왼쪽 페이지 */}
              <Grid item xs={6}>
                <Item>
                  
                  <Fab size="small" color="inherit" aria-label="add">
                  <StopIcon />
                  </Fab>
                  &nbsp;&nbsp;
                  <Fab size="small" color="inherit" aria-label="add">
                   
                    <PlayArrowIcon />
                  </Fab>
                  &nbsp;&nbsp;
                  <Fab size="small" color="inherit" aria-label="add">
                    <PauseIcon />
                  </Fab>
                  &nbsp;&nbsp;
                  <Fab size="small" color="inherit" aria-label="add">
                    <AudioFileIcon />
                  </Fab>
                  
                  <Box>
                  <hr></hr>
                    <h4>메모</h4>
                    <hr></hr>
                    <Table responsive="xl">
                      <tr>
                        <th>닉네임</th>
                        <th>날짜</th>
                      </tr>
                      <tbody>
                        <tr>
                          <td>
                            
                            조창훈
                            <br></br>
                            <br></br>
                            <br></br>

                            <div>
                              메모 내용 
                              

                            </div>
                            ㅁㄴㅇㅁㄴ


                          </td>
                          
                          <td>2020/10-19 - 19:00
                          </td>
                            

                      
                        </tr>

                        <tr>
                          <td>
                            
                            조창훈
                            <br></br>
                            <br></br>
                            <br></br>

                            <div>
                              메모 내용 
                              

                            </div>
                            ㅁㄴㅇㅁㄴ


                          </td>
                          
                          <td>2020/10-19 - 19:00
                          </td>
                            

                      
                        </tr>
                        <tr>
                          <td>
                            
                            조창훈
                            <br></br>
                            <br></br>
                            <br></br>

                            <div>
                              메모 내용 
                              

                            </div>
                            ㅁㄴㅇㅁㄴ


                          </td>
                          
                          <td>2020/10-19 - 19:00
                          </td>
                            

                      
                        </tr>
                        
                      </tbody>

                    </Table>
                  </Box>
                    
                </Item>
              </Grid>
            </Grid>
          </Box>
          </Grid>

        </Container>

     
  )
}

export default Client