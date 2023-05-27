import styled from 'styled-components';

export const Box = styled.div`
      background-color: #A7E0CF;
      width: 660px;
      height: 212px;
      border-radius: 12px;
      position: relative;
    `;
export const BorderBox = styled.div`
      border-radius: 12px;
      border: 2px dashed #1A2741;
      margin: 5px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
`;
export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `;

export const ProgressBar = styled.div`
  width: 452px;
  height: 6px;
  background-color: #FFFFFF;
  border-radius: 10px;
`;

export const Percentage = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: #1A2741;
`;

export const ProgressLine = styled.div<{ progress: number }>`
  width: ${(props) => `${props.progress}%`};
  height: 100%;
  background-color: #28AB82;
  border-radius: 10px;
`;

export const ProgressBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const CancelButton = styled.button`
  color: #1A2741;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  `;

export const Title = styled.h1`
      font-weight: 400;
      font-size: 22px;
      line-height: 32px;
      text-align: center;
      width: 426px;
      color: #1A2741;
    `;

export const Text = styled.p`
      font-weight: 400;
      font-size: 16px;
      color: #1A2741;
    `;

export const SimpleBox = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
    `;
export const Button = styled.button`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 30px;
      gap: 8px;
      border: 2px solid #1A2741;
      border-radius: 6px;
      font-weight: 700;
      font-size: 22px;
      color: #1A2741;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: #1A2741;
        color: #fff;
      }
    `;

export const ProgressTitle = styled.h2`
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      color: #07875E;
      text-align: center;
    `;