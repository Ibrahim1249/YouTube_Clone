import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Loading() {
  const SkeletonSize = Array.from({ length: 15 }, (_, index) => index);
  return (
    <>
       <div className="flex flex-wrap gap-6 px-4 justify-center">
      {SkeletonSize.map((_, index) => (
        <Box key={index} sx={{ width: '100%', maxWidth: 300 }}>
          <div className="flex flex-col gap-2">
            <Skeleton
              variant="rectangular"
              width={300}
              height={150}
              sx={{ mb: 1 }} 
            />
            <div className="flex gap-4">
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                animation={false}
              />
              <div>
                <Skeleton
                  variant="text"
                  width={230}
                  height={30}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  width={150}
                  height={30}
                  sx={{ mb: 1 }} // Optional margin-bottom
                  animation="wave"
                />
              </div>
            </div>
          </div>
        </Box>
      ))}
    </div>

    </>
  );
}

export default Loading;
