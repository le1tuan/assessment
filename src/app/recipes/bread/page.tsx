import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { CustomBreadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FilterTiltShiftRoundedIcon from '@mui/icons-material/FilterTiltShiftRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import { useEffect } from "react";

export default async function Recipes() {
  return (
    <Stack
      direction="row"
      gap="1.5rem"
    >
      <Box
        sx={{
          width: '50%',
          flexGrow: 1,
        }}
      >
        <CustomBreadcrumbs />
        <Typography variant="h3"
          sx={{
            margin: '2rem 0 4rem 0'
          }}
        >
          Whole-Grain Banana Bread
        </Typography>
        <Typography
          sx={{
            marginBottom: '2rem',
            textAlign: 'left',
          }}
        >
          This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it&apos;s versatile.
        </Typography>
        <Stack gap="2rem">
          <Stack direction="row" gap="1rem">
            <Stack flexGrow={1} direction="row" gap="1rem" justifyContent="flex-start" alignItems="center">
              <AccessTimeIcon sx={{
                height: 42,
                width: 42
              }} />
              <Box>
                <Typography fontStyle="italic">Prep</Typography>
                <Typography>10 mins</Typography>
              </Box>
            </Stack>
            <Box flexGrow={1}>
              <Typography fontStyle="italic">Bake</Typography>
              <Typography>1 hr to 1 hr 15 mins</Typography>
            </Box>
            <Box flexGrow={1}>
              <Typography fontStyle="italic">Total</Typography>
              <Typography>1 hr 10mins</Typography>
            </Box>
          </Stack>
          <Divider />
          <Stack direction="row" gap="1rem" justifyContent="flex-start" alignItems="center">
            <Stack flexShrink={1} direction="row" gap="1rem" justifyContent="flex-start" alignItems="center">
              <FilterTiltShiftRoundedIcon sx={{
                height: 42,
                width: 42
              }} />
              <Box flexShrink={1}>
                <Typography fontStyle="italic">Yield</Typography>
                <Typography>1 loaf, 12 generous servings</Typography>
              </Box>
            </Stack>
            <Button
              sx={{
                width: '150px'
              }}
              variant="outlined"
              startIcon={<AddRoundedIcon />}
            >
              <Typography fontSize="0.75rem">Save Recipe</Typography>
            </Button>

            <Button
              variant="outlined"
              startIcon={
                <LocalPrintshopRoundedIcon />
              }>
              <Typography fontSize="0.75rem">Print</Typography>
            </Button>

          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          width: '50%',
          flexGrow: 1,
        }}
      >
        <img
          style={{
            width: '100%',
            objectFit: 'cover'
          }}
          src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-09/whole-grain-banana-bread-3_0822.jpg?itok=XSvVPGg3"
        />
      </Box>
    </Stack>

  )
}