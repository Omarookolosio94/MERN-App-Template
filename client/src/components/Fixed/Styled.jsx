import styled from 'styled-components';
import '../../App.scss';

export const Container = styled.div`
  z-index: 3;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 0 1rem;
`;

export const Button = styled.button`
  background-color: inherit;
  border: 1px solid inherit;
  padding: 6px 6px;
  font-size: 14px !important;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
  transition-duration: 0.4s;

  .fal {
    margin-right: 5px;
  }

  ${({ light, danger, success }) => {
    switch (true) {
      case light:
        return `
        .fal {
          color: none;
        }        
          `;
      case danger:
        return `
        .fal {
          color:#dc3545;            
        } `;
      case success:
        return ` 
        .fal {
          color: #28a745;
        }`;
      default:
        return `
        .fal {
          color: none;
        }
        `;
    }
  }}

  &:hover {
    ${({ light, danger, success }) => {
      switch (true) {
        case light:
          return `border : 1px solid #fff;        
          `;
        case danger:
          return `border : 1px solid #dc3545;            
          `;
        case success:
          return `border : 1px solid #28a745`;
        default:
          return `border : 1px solid none`;
      }
    }}
  }
`;
