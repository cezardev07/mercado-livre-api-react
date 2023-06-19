import { styled } from "styled-components"

export const TagHeader = styled.header`
    background: var(--bg-header);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;

    nav{
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        form{
            width: 580px;
            input{
                width: 100%;
                padding: 10px 20px;
                border: none;
                font-size: 15px;
                color: #c9c7c7;
                outline: solid 1px transparent;
            }
        }

        .btn-carrinho{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                padding: 6.5px 15px;
                cursor: pointer;
                background: #e4d95b;
                font-size: 18px;
                border: none;
                border-radius: 3px;
                transition: all .3s ease;
                /* margin-left: 20px; */
                color: #111111;
            }
            button:hover{
                background: transparent;
            }
        }
        .logo{
            img{
                width: 134px;
                height: 34px;
            }
        }
    }
`

export const Carrinho = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: ${({props}) => props === "true" ? "300px" : "0px"};
    height: 100vh;
    transition: all .3s ease;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header-carrinho{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 20px 10px;
        background: var(--bg-carrinho);

        .title-carrinho{
            color: #111111;
            font-size: 20px;
            text-transform: capitalize;
        }

        .btn-close{
            button{
                padding: 7px 15px;
                cursor: pointer;
                background: red;
                color: white;
                font-size: 20px;
                border: none;
                border-radius: 5px;
                transition: all .3s ease;
            }
            button:hover{
                background: transparent;
                color: red;
            }
        }
    }

    .main-carrinho{
        color: white;
        height: 100%;
        background: #ddd;
        overflow-y: scroll;
        padding: 10px 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .card-carrinho{
            position: relative;
            width: 200px;
            border-radius: 5px;
            transition: all .3s ease;
            padding: 10px 0;
            cursor: pointer;
            background: var(--bg-item);
            text-decoration: none;

            img{
                width: 100%;
                height: 100px;
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
                padding: 0 10px 10px;
                height: 100%;
                p{
                    color: #666666;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
        .card-carrinho:hover{
            transform: scale(1.03);
            box-shadow: 0px 0px 20px 0px #666666;
        }
    }
    
    .footer-carrinho{
        background: var(--bg-carrinho);
        padding: 10px;
        .btn-footer-carrinho{
            display: flex;
            button{
                width: 100%;
                height: 100%;
                padding: 20px 10px;
                font-size: 20px;
                text-transform: capitalize;
                cursor: pointer;
                background: royalblue;
                color: white;
                border: none;
                border-radius: 5px;
                transition: all .3s ease;
            }
            button:hover{
                background: green;
            }
            button:active{
                transform: scale(.9);
            }
        }
    }

    @media (max-width: 320px) {
        width: ${({props}) => props === "true" ? "100%" : "0px"};
    }
`
export const LengthCarrinho = styled.span`
    color: white;
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    border-radius: 50%;

    width: ${({props}) => props > 0 ? "20px" : "0px"};
    height: ${({props}) => props > 0 ? "20px" : "0px"};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    overflow: hidden;
`