import React from "react";
import { LoadingContainer } from "./Loading.styles.";

import loadingAnimation from "../../assets/lotties/loading.json";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";

const Loading = () => {
    const loadingRedux = useSelector((state: any) => state.UtilReducer.loading);

    return(
        <>
        {loadingRedux &&(
            <LoadingContainer>
                    <div>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: loadingAnimation,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            height={300}
                            width={300}
                        />
                        <h4 className="text-center mt-3">Carregando...</h4>
                    </div>
            </LoadingContainer>
        )}
        </>
    );
}

export default Loading;

