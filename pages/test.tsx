import Button from '@/components/Button';
import Center from '@/components/Center';
import Dialog, { DialogActions, DialogContent, DialogTitle, useDialog } from '@/components/Dialog';
import Loading from '@/components/Loading';
import OutlinedButton from '@/components/OutlinedButton';
import TextButton from '@/components/TextButton';
import { NextPage } from 'next';

interface Props {
}
const ForUiTestPage: NextPage<Props> = ({ }) => {
    const { dialogProps, toggle, open, close } = useDialog()
    return (
        <main>
            <h1>ui components catalogs</h1>
            <section>
                <h2>button</h2>
                <Button size="sm">button-sm</Button>
                <Button size="md">button-md</Button>
                <Button size="lg">button-lg</Button>
            </section>
            <section>
                <h2>customize button</h2>
                <Button className='bg-theme-1'>theme-1 color button</Button>
                <Button className='text-yellow-300'>yellow text color button</Button>
                <Button className='text-3xl'>big text button</Button>
            </section>
            <section>
                <h2>elevation button</h2>
                <Button size="sm" elevation>button-sm (elevation)</Button>
                <Button size="md" elevation>button-md (elevation)</Button>
                <Button size="lg" elevation>button-lg (elevation)</Button>
            </section>
            <section>
                <h2>outlined button</h2>
                <OutlinedButton size="sm">outlined sm</OutlinedButton>
                <OutlinedButton size="md">outlined md</OutlinedButton>
                <OutlinedButton size="lg">outlined lg</OutlinedButton>
            </section>
            <section>
                <h2>outlined elevation button</h2>
                <OutlinedButton size="sm" elevation>outlined sm (elevation)</OutlinedButton>
                <OutlinedButton size="md" elevation>outlined md (elevation)</OutlinedButton>
                <OutlinedButton size="lg" elevation>outlined lg (elevation)</OutlinedButton>
            </section>

            <section>
                <h2>dialog</h2>
                <Button onClick={() => toggle()}>toggle dialog</Button>
                <Dialog {...dialogProps}
                    title={<>confirm</>}
                >
                    <DialogTitle>
                        Confirm
                    </DialogTitle>
                    <DialogContent center>
                        ok ?
                    </DialogContent>
                    <DialogActions>
                        <TextButton onClick={() => close()}>
                            cancel
                        </TextButton>
                        <Button onClick={() => close()}>
                            ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </section>

            <section>
                <h2>loading and center</h2>
                <Center>
                    <Loading
                        isLoading
                    />
                </Center>
            </section>
        </main>
    );
}
export default ForUiTestPage;
