import { styled } from "styled-components"

export const TagMain = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 90px;
    min-height: 100vh;

    .slide{
        width: 100%;
        padding: 0 20px;

        img{
            width: 100%;
            object-fit: cover;   
        }
    }
    .title{
        padding: 0 20px;
        padding-top: 10px;
        h2{
            color: #666666;
            font-size: 23px;
            font-weight: 400;
        }
    }
    article{
        width: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 10px;
        padding: 20px;

        .card{
            position: relative;
            height: 280px;
            overflow: hidden;
            border-radius: 5px;
            transition: all .3s ease;
            padding: 10px 0;
            cursor: pointer;
            background: var(--bg-item);
            text-decoration: none;
            img{
                width: 100%;
                height: 162px;
                object-fit: contain;
                margin-bottom: 20px;
            }
            .price{
                padding: 15px 10px 10px;
                font-size: 20px;
                font-weight: 600;
                color: #111111;
                border-top: solid 1px #c9c7c7;
            }
            .description{
                padding: 0 10px;
                height: 100%;
                
                p{
                    color: #666666;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            .add-card{
                opacity: -1;
                position: absolute;
                top: 10px;
                right: 10px;
                transition: all .2s ease;

                button{
                    font-size: 20px;
                    cursor: pointer;
                    /* background: transparent; */
                    border-radius: 5px;
                    padding: 3px;
                    border: none;
                    color: royalblue;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .card:hover{
            scale: 1.03;
        }
        .card:hover  .add-card{
            opacity: 1;
        }
        .card:active .add-card{
            scale: .9;
            button{
                color: green;
            }
        }
    }
`